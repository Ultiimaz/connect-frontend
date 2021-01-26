import React, {useEffect} from "react";
import { VariableSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import {ProfilePicture} from "./ProfilePicture";
import {string} from "prop-types";


const Message = props => {
  return(<div className={" border-b-1 border-white-200 py-5 mx-5"} style={props.style}>
    <ProfilePicture status={null}/>
    <span className={"font-bold text-white"}>{props.sender}:</span>
    <span> </span>
    <span className="text-white">{props.message}</span>

  </div>)
}
Message.propTypes = {
  sender: string,
  message: string
}

export default function ExampleWrapper({
   // Are there more items to load?
   // (This information comes from the most recent API request.)
   hasNextPage,

   // Are we currently loading a page of items?
   // (This may be an in-flight flag in your Redux store for example.)
   isNextPageLoading,

   // Array of items loaded so far.
   items,

   // Callback function responsible for loading the next page of items.
   loadNextPage
}) {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = index => !hasNextPage || index < items.length;

  // Render an item or a loading indicator.
  const Item = ({ index, style }) => {
    let content;
    if (!isItemLoaded(index)) {
      content = <span />;
    } else {
      content = <Message sender={items[index].sender} message={items[index].message}/>;
    }

    return <div style={style}>{content}</div>;
  };

  let listRef = null;

  useEffect(() => {
    if(listRef){
      debugger;
      // listRef.(items.length);
    }
  },[

  ]);
  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <List
          className="List"
          height={500}
          itemCount={itemCount}
          itemSize={null}
          onItemsRendered={onItemsRendered}
          ref={(list) => {
            listRef = list
          }}
          width={"100%"}
        >
          {Item}
        </List>
      )}
    </InfiniteLoader>
  );
}
