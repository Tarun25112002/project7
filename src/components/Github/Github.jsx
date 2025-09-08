import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-sm w-full rounded-2xl bg-white/10 backdrop-blur-lg p-6 shadow-lg border border-white/20 text-center">
        <img
          src={data.avatar_url}
          alt={data.login}
          className="w-28 h-28 mx-auto rounded-full ring-4 ring-emerald-400 shadow-md"
        />
        <h2 className="mt-4 text-2xl font-bold text-white truncate">
          {data.name || data.login}
        </h2>
        <p className="text-gray-300">@{data.login}</p>
        {data.bio && (
          <p className="mt-2 text-sm text-gray-400 italic line-clamp-2">
            {data.bio}
          </p>
        )}

        <div className="mt-6 grid grid-cols-3 gap-3 text-white">
          <div className="p-3 rounded-xl bg-white/10">
            <p className="text-lg font-bold">{data.followers}</p>
            <p className="text-xs text-gray-400">Followers</p>
          </div>
          <div className="p-3 rounded-xl bg-white/10">
            <p className="text-lg font-bold">{data.following}</p>
            <p className="text-xs text-gray-400">Following</p>
          </div>
          <div className="p-3 rounded-xl bg-white/10">
            <p className="text-lg font-bold">{data.public_repos}</p>
            <p className="text-xs text-gray-400">Repos</p>
          </div>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block w-full rounded-full bg-emerald-500 px-5 py-2 text-gray-900 font-semibold hover:bg-emerald-400 transition"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default Github;
export const githubinfoloader = async () => {
  const response = await fetch("https://api.github.com/users/Tarun25112002");
  return response.json();
};
