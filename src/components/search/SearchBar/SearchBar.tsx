import { Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon
} from "@chakra-ui/react";

import './SearchBar.css';

//К сожалению т.к. АПИ, которое я выбрал не поддерживает поиск валют по названию, то поиск пришлось выпилить ;(
export const SearchBar = (): JSX.Element => {
  return (
    <>
      <InputGroup size="sm" className="input-group-search-bar">
        <Input
          type="text"
          placeholder="Search..."
          border="1px solid #949494"
          borderRadius={10}
          fontSize={16}
          focusBorderColor="#949494"
        />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="sm" borderLeftRadius={0} border="1px solid #949494">
            <Search2Icon />
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};