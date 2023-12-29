import { useState } from "react";
import Button from "./Button";
import './Panel.css';

function Panel({ title, children}) {

    const [isActive, setIsActive] = useState(false);

    return (
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <Button className="Show_button" visual="button" onClick={() => setIsActive(true)}>
            Show
          </Button>
        )}
      </section>
    );
  }

  export default Panel;