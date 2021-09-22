import React from "react";
import { Link } from "react-router-dom";

function SubmitBtn(props) {
  const { setSolved, content } = props;
  return (
    <div className="pop-up-container">
      <div className="pop-up">
        <h4>{content}</h4>
        <div>
          <button>
            <Link style={{textDecoration:'none', color:'#264653'}} to="/">Back to home</Link>
          </button>
          <button
            onClick={() => {
              setSolved("not submitted");
            }}
          >
            Back to game
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubmitBtn;
