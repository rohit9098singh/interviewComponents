"use client"
import React, { useEffect, useState } from 'react';

type Recipe = {
    id: number;
    name: string;
    [key: string]: any;
};

const WithLocalStorage = () => {
    const [result, setResult] = useState<Recipe[]>([]);
    const [input, setInput] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [cache, setCache] = useState<{ [key: string]: Recipe[] }>({});

    const fetchApiData = async (query: string) => {
        if (cache[query]) {
            console.log("cache returned", query);
            setResult(cache[query]);
            return;
        }

        console.log("api called", query);
        const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
        const data = await response.json();

        if (data?.recipes) {
            setResult(data.recipes);
            setCache((prev) => ({ ...prev, [query]: data.recipes }));
        }
    };

    useEffect(() => {
        const trimmedInput = input.trim();

        if (trimmedInput === "") {
            setResult([]);
            return;
        }

        const timer = setTimeout(() => {
            fetchApiData(trimmedInput);
        }, 300);

        return () => clearTimeout(timer); 
    }, [input]);

    return (
        <div className="mt-10 max-w-4xl mx-auto px-4">
            <h1 className="mt-6 text-2xl font-bold flex justify-center">Google searchbar</h1>
            <input
                type="text"
                className="border border-gray-500 p-2 w-full mt-4 rounded-md"
                placeholder="Search for recipes..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setShowResult(true)}
                onBlur={() => setShowResult(false)}
            />
            {
                showResult && (
                    <div className="max-w-4xl rounded-md border border-gray-400 flex flex-col gap-2 p-2 max-h-[44vh] overflow-y-auto">
                        {
                            result && result.map((r) => (
                                <span key={r.id} className="">{r.name}</span>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default WithLocalStorage;
