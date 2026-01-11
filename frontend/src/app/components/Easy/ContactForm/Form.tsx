// "use client"
// import React, { useState } from "react";

// type FormDataProps = {
//     name: string;
//     email: string;
//     password: string;
// };

// type FormErrorProps = {
//     name?: string;
//     email?: string;
//     password?: string;
// };

// const Form = () => {
//     const [formData, setFormData] = useState<FormDataProps>({
//         name: "",
//         email: "",
//         password: "",
//     });

//     const [error, setError] = useState<FormErrorProps>({});
//     const [Submitted, setSubmited] = useState<boolean>(false)

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));

//         // Real-time error clear
//         setError((prev) => ({
//             ...prev,
//             [name]: "",
//         }));
//     };

//     const validate = () => {
//         const newErrors: FormErrorProps = {};

//         if (!formData.name.trim()) newErrors.name = "Name is required";
//         if (!formData.email.trim()) newErrors.email = "Email is required";
//         if (!formData.password.trim())
//             newErrors.password = "Password is required";

//         setError(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (!validate()) return;
//         setSubmited(true)
//         console.log("Submitted:", formData);
//     };

//     return (
//         <div className="flex min-h-screen items-center justify-center bg-green-100">
//             {
//                 Submitted && (
//                     <p className="text-green-500 font-bold">data submited successfully</p>
//                 )
//             }
//             <form
//                 onSubmit={handleSubmit}
//                 className="flex max-w-4xl flex-col gap-4 rounded-xl bg-white p-4"
//             >
//                 <div>
//                     <label className="font-bold">Name</label>
//                     <input
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full rounded-md p-4"
//                     />
//                     {error.name && (
//                         <p className="text-sm text-red-500">{error.name}</p>
//                     )}
//                 </div>

//                 <div>
//                     <label className="font-bold">Email</label>
//                     <input
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full rounded-md p-4"
//                     />
//                     {error.email && (
//                         <p className="text-sm text-red-500">{error.email}</p>
//                     )}
//                 </div>

//                 <div>
//                     <label className="font-bold">Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="w-full rounded-md p-4"
//                     />
//                     {error.password && (
//                         <p className="text-sm text-red-500">{error.password}</p>
//                     )}
//                 </div>

//                 <button
//                     type="submit"
//                     className="rounded-md bg-blue-500 p-3 text-white"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Form;

