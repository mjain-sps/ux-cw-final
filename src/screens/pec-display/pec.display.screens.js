import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderWithSearch from "../../components/header-with-search/header.with.search.components";
import { registeredUser } from "../../data/user.data";

const PecDisplayScreen = () => {
  const { fullName } = useParams();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleOnChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <HeaderWithSearch
        handleOnChange={handleOnChange}
        searchKeyword={searchKeyword}
        user={registeredUser[0]}
      />
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </>
  );
};

export default PecDisplayScreen;
