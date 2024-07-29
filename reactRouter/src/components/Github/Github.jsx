import React, { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/kamalsheel10`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className=" text-center m-4 bg-gray-800 text-white p-4text-3xl flex justify-center gap-8">
      GitHub Name: {data?.login}
      <br />
      GitHub Followers: {data?.followers}
      <br />
      <img src={data?.avatar_url} alt="" className="w-12 flex" />
    </div>
  );
}

export default GitHub;

export const gitHubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/kamalsheel10`);
  return response.json();
};
