// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRequest } from '../../Api/Api';
// import { ReactComponent as Search } from '../../assets/icons/search.svg';
// import { useDebounce } from '../../hooks/useHook';
// import { searchPartner } from '../../Redux/reducers/PartnersSlices/action';

// const SearchPartner = ({ handlePaginate, pageNumber }) => {
//     const currentCompanyID = useSelector(state => state.loginUser.currentCompanyID);
//     const [searchValue, setSearchValues] = useState('')
//     const debouncedSearchTerm = useDebounce(searchValue, 2000);

//     const dispatch = useDispatch();
//     const changeHandler = e => {
//         setSearchValues(e.target.value)
//     }

//     useEffect(() => {
//         if (searchValue.length > 0) {
//             getRequest(getpartners?companyid=${currentCompanyID}&searchstring=${debouncedSearchTerm})
//                 .then(res => {
//                     if (res.data) {
//                         dispatch(searchPartner(res.data))
//                     }

//                 })
//         }
//         else if (searchValue === "") {
//             handlePaginate(pageNumber)
//         }

//     }, [debouncedSearchTerm])
//     return (
//         <div className="search-block">
//             <div className="serach-box">
//                 <input type="text"
//                     value={searchValue}
//                     placeholder="Որոնել"
//                     name="companyName"
//                     onChange={changeHandler}
//                 />
//             </div>
//             <span className="icon-block">
//                 <Search />
//             </span>
//         </div>
//     )
// }

// export default SearchPartner

// import { useEffect, useState } from "react";

// export const useDebounce = (value, delay) => {
//     const [debouncedValue, setDebouncedValue] = useState(value);
//     useEffect(
//         () => {
//             const handler = setTimeout(() => {
//                 setDebouncedValue(value);
//             }, delay);

//             return () => {
//                 clearTimeout(handler);
//             };
//         },
//         [delay, value]
//     );

//     return debouncedValue;
// }
