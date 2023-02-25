import React from 'react'
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {

  return (
    <div className='d-flex'>
        <MyInput
          value={filter.query}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          placeholder="Search query..."
        />
        <MySelect
          value={filter.sort}
          onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sort by ..."
          option={[
            { value: "title", name: "By title" },
            { value: "body", name: "By description" },
          ]}
        />
      </div>
  )
}

export default PostFilter