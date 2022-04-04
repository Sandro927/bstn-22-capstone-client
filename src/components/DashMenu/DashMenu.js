import React from 'react';
import { Link } from 'react-router-dom';
import './DashMenu.scss';

function DashMenu() {
  return (
    <aside className="dashmenu">
        <Link className="dashmenu__links">Game1</Link>
        <Link className="dashmenu__links">Game2</Link>
        <Link className="dashmenu__links">Game3</Link>
     
    </aside>
  )
}

export default DashMenu