// import { useState } from "react";
// import styled from "styled-components";
// import HolidayCard from "./components/HolidayCard";
// import { ReactComponent as SortAZ } from "./icons/sort-az.svg";
// import { ReactComponent as SortPrice } from "./icons/sort-price.svg";
// import { ReactComponent as SortRating } from "./icons/rating-star.svg";

// import data from "./mockData.json";
// import { Holiday } from "./types";
// import SortButton from "./components/SortButton";
// import { THEME_BLUE_GREY } from "./styles";

// const AppContainer = styled.div`
//   display: flex;
//   width: 100vw;
//   justify-content: center;
// `;

// const Content = styled.main`
//   display: flex;
//   justify-content: center;
//   padding: 32px;
//   position: absolute;
// `;

// const Background = styled.div`
//   background-image: url(/background.png);
//   background-position: center;
//   height: 100vh;
//   width: 100vw;
//   position: fixed;
// `;

// const CardsWrapper = styled.ul`
//   margin: 0;
//   list-style-type: none;
//   & > *:not(:last-child) {
//     display: block;
//     margin-bottom: 30px;
//   }
// `;

// const SortButtonsWrapper = styled.ul`
//   margin: 0;
//   list-style-type: none;
//   & > *:not(:last-child) {
//     display: block;
//     border-bottom: solid 1px;
//     border-color: ${THEME_BLUE_GREY};
//   }
// `;

// const HolidayList = () => {
//   const [sortedHolidays, setSortedHolidays] = useState<Holiday[]>(
//     data.holidays
//   );
//   const [activeSort, setActiveSort] = useState<
//     "alphabetically" | "price" | "rating"
//   >("price");

//   const alphabetically = (a: Holiday, b: Holiday) => {
//     return a.accommodationName.localeCompare(b.accommodationName);
//   };

//   const price = (a: Holiday, b: Holiday) => {
//     return b.price - a.price;
//   };

//   const rating = (a: Holiday, b: Holiday) => {
//     return b.rating - a.rating;
//   };

//   switch (activeSort) {
//     case "alphabetically":
//       setSortedHolidays([...sortedHolidays.sort(alphabetically)]);
//       break;
//     case "price":
//       setSortedHolidays([...sortedHolidays.sort(price)]);
//       break;
//     case "rating":
//       setSortedHolidays([...sortedHolidays.sort(rating)]);
//       break;
//     default:
//       setSortedHolidays([...sortedHolidays.sort(price)]);
//       break;
//   }

//   return (
//     <AppContainer>
//       <Background />
//       <Content aria-label='holiday search results'>
//         <aside aria-label='sort options'>
//           <SortButtonsWrapper>
//             <li>
//               <SortButton
//                 regularText='sort'
//                 boldText='alphabetically'
//                 Icon={SortAZ}
//                 onClick={() => {
//                   setActiveSort("alphabetically");
//                 }}
//                 active={activeSort === "alphabetically"}
//               />
//             </li>
//             <li>
//               <SortButton
//                 regularText='sort by'
//                 boldText='price'
//                 Icon={SortPrice}
//                 onClick={() => {
//                   setActiveSort("price");
//                 }}
//                 active={activeSort === "price"}
//               />
//             </li>
//             <li>
//               <SortButton
//                 regularText='sort by'
//                 boldText='star rating'
//                 Icon={SortRating}
//                 onClick={() => {
//                   setActiveSort("rating");
//                 }}
//                 active={activeSort === "rating"}
//               />
//             </li>
//           </SortButtonsWrapper>
//         </aside>
//         <article aria-label='list of holiday search results'>
//           <CardsWrapper>
//             {sortedHolidays.map((holiday, index) => (
//               <li key={`holiday-card-${index}`}>
//                 <HolidayCard
//                   holiday={holiday}
//                   key={holiday.id}
//                   bookNowClickHandler={() => {
//                     console.log("Thanks for looking at my tech test :)");
//                   }}
//                 />
//               </li>
//             ))}
//           </CardsWrapper>
//         </article>
//       </Content>
//     </AppContainer>
//   );
// };

// export default HolidayList;
export {};
