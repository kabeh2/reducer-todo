import React from "react";

function Tabs({ dispatch, ...state }) {
  return (
    <div className="filter-tab">
      {state.tabs.map(tab => {
        return (
          <div
            key={tab.name}
            className={state.currentTab === tab.name ? "tab active-tab" : "tab"}
            onClick={() => dispatch({ type: "FILTER", currentTab: tab.name })}
          >
            {tab.name}
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
