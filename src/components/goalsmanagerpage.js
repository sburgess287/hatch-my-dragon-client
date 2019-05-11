import React from 'react';

import GoalsManager from './goalsmanager';

const goals = [
  {
    name: 'Running',
    id: 'id'
  }, 
  {
    name: 'Play Violin',
    id: 'id'
  }, 
  {
    name: 'Code Capstone',
    id: 'id'
  }

]

export default function GoalsManagerPage() {
  return (
    <div>
      <GoalsManager goals={goals} />
    </div>
  )
}