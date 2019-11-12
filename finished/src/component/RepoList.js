import React, { useState, useEffect } from 'react';
import axios from 'axios';
const RepoList = ({ resource }) => {
  const [resources, setResources] = useState([]);
   const fetchResource = async (resource) => {
    const response = await axios.get(`https://api.github.com/users/${resource}/repos`)

    setResources(response.data);
  };
  useEffect(() => {
    fetchResource(resource);
  }, [resource])
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {resources.length > 0 ? <img class="w-full" src={resources[0].owner.avatar_url}/> : ''}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{resource} Repos</div>
            <p className="text-gray-700 text-base">
              List of Repos Below:
            </p>
          </div>
          <div className="px-6 py-4">
          <ul className="px-6 py-4">
            {resources.map(record =>
              <li key={record.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 m-1">
                {record.name}
              </li>
            )}
          </ul>
          </div>
        </div>
    )
}

export default RepoList;