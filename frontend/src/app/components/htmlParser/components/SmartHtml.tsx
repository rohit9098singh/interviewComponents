"use client";
import parse, { domToReact } from "html-react-parser";
import React from "react";

type ComponentMap = {
  [tag: string]: React.ElementType;
};

type SmartHtmlProps = {
  html: string;

  components?: ComponentMap; // tag → React component
  classMap?: Record<string, string>; // tag → class
};

export default function SmartHtml({
  html,
  components = {},
  classMap = {},
}: SmartHtmlProps) {
  // Simple sanitization - remove script tags and dangerous attributes
  const sanitizeHtml = (dirtyHtml: string): string => {
    return dirtyHtml
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/on\w+\s*=/gi, ''); // Remove inline event handlers
  };

  const cleanHtml = sanitizeHtml(html);

  // Void elements that cannot have children
  const voidElements = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr'
  ]);

  return (
    <>
      {parse(cleanHtml, {
        replace(node: any) {
          if (!node.name) return;

          // hard security rule
          if (node.name === "script") return null;

          const TagComponent = components[node.name];

          const props = {
            ...node.attribs,
            className:
              classMap[node.name] || node.attribs?.class,
          };

          const children = domToReact(node.children);

          // if custom component provided
          if (TagComponent) {
            // Void elements can't have children
            if (voidElements.has(node.name)) {
              return <TagComponent {...props} />;
            }
            return <TagComponent {...props}>{children}</TagComponent>;
          }

          // else let html-react-parser handle it
          return undefined;
        },
      })}
      {/* {
        parse(cleanHtml,{
          replace(node:any)
        })
      } */}
    </>
  );
}


