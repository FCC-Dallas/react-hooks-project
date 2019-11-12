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
      <ul>{resources.map(record => <li key={record.id}>{record.name}</li>)}</ul>
    )
}

export default RepoList;