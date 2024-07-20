import React from "react";

export default function Title({ smallt, bigt, Icon }) {
  return (
    <div className="border-l-4 border-royalBlue-600 pl-4 md:pl-6 ml-4 md:ml-6">
      <p className="text-royalBlue-600 text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4 text-left">{smallt}</p>
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl whitespace-nowrap text-tangerine flex items-center">
        <span className="flex items-center">
          {/* Ensure text and icon are vertically centered */}
          <span className="flex items-center leading-none">{bigt}</span>
          {Icon && <Icon className="ml-3 align-middle" size={42} color="#312DE6" />}
        </span>
      </h1>
    </div>
  );
}
