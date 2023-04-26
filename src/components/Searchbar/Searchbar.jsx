
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';

const SearchBar = () => {
  const navigate = useNavigate()
  const [value, setValue] = React.useState('')
  const search_options = [
    {
      value: "Applied",
      label: 'Applied',
      link: '/admin/home'
    },
    {
      value: "Couses",
      label: 'Couses',
      link: '/admin/course-listing'
    },
    {
      value: "Blogs",
      label: 'Blogs',
      link: '/admin/blogs-listing'
    },
    {
      value: "Events",
      label: "Events",
      link: '/admin/event-listing'
    },
    {
      value: "FeedBacks",
      label: "FeedBacks",
      link: '/admin/feedback-list'
    },
    {
      value: "About Us",
      label: "About Us",
      link: '/admin/about-us-edit'
    },
    {
      value: "Support",
      label: "Support",
      link: '/support'
    },
    {
      value: "Socials",
      label: "Socials",
      link: '/admin/social-media'
    },
    {
      value: "Navbar",
      label: "Navbar",
      link: '/admin/social-media'
    }
    ,
    {
      value: "Footer",
      label: "Footer",
      link: '/admin/social-media'
    }
    ,
    {
      value: "Profile",
      label: "Profile",
      link: '/admin/social-media'
    }

  ];

  let onSelect = React.useCallback((a, data) => {
    setValue(a)
    if (data) {
      navigate(data?.link)
    }
  }, [navigate])

  return (
    <CustomeSpan
      style={{
        width: "100%",
        border: "none",

      }}
      className="pr-[5px]"
      size={"medium"}
      options={search_options}
      bordered={false}
      notFoundContent={"Not Found"}
      onSelect={onSelect}
      filterOption={(inputValue, option) =>
        option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    >
      <Input.Search  bordered={false} style={{ border: "none", width: "100%" }} size="large" placeholder="Search ..." />
    </CustomeSpan>
  )
};

export default SearchBar;

const CustomeSpan = styled(AutoComplete)`
&& {
  padding-top:10px;
  font-size:16px;
  width:100% !important;
border : none !important;
  overflow:hidden !important;
  background:#F6FBFE ;
padding-top:0px !important ;
  padding-bottom:5px;
  height:38px !important;
  border-radius:20px;
  box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
  button{
    border:none !important;
    border-radius:30px;
  
  }

:hover{
//   border:none !important;
  ouline:none !important;
}
}
`;
