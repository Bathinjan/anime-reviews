//? Props Practice
//* (Inside return() )

/* <Navbar />
<Hero />
<div className="Cards">
  <OneCard
    title="Chainsawman"
    text="This dumbass thinks he's got everything figured out, doesn't he?"
    imageLink={require("./images/huh.png")}
  />
  <OneCard
    title="Soap"
    text="Who died and made you cosmic emperor???"
    imageLink={require("./images/bean.gif")}
  />
  <OneCard
    title="Dan Jones"
    text="Finally, someone with some goddamn SENSE around here"
    imageLink={require("./images/dan.png")}
  />
</div> */

//? String Manipulation Exercise 1
// const names = ["fucktart", "gizzard", "bunteeth", "dupsupper"];
// {names.map((name) => {
//   // return name[0].toUpperCase() + name.slice(1)
//   return name.charAt(0).toUpperCase() + name.slice(1) + "\n";
// })}

//? String Manipulation Exercise 2
// const names = ["fucktart", "gizzard", "bunteeth", "dupsupper"];
// {names.map((name) => {
//   return `<p>${name}</p>`;
// })}

//? Map Exercise
// // Map from external javascript file
// // Return a joke component with props filled
// const jokeElements = jokesData.map((joke) => {
//   return <Joke setup={joke.setup} punchline={joke.punchline} />;
// });

// return <>{jokeElements}</>;

//? Map & Rendering from External File Exercise
// export default function App() {
//   // map over JS array data
//   const cards = data.map((object) => {
//     // return instance of Card with props from data properties
//     // return <Card2 key={object.id} object={object} />;
//     //* ^ requires all props in Card2.js to be prefixed with props.object.{thing}
//     //! a simpler way to write the above (uses 'spread syntax'):
//     return <Card2 key={object.id} {...object} />;
//     //* no longer need to change code in Card2.js
//   });
//   return <div class="card-grid">{cards}</div>;
// }

//? Trying to slice an array into 4 chunks to render at a time
//! Note: doesn't work, probably need state
// Slice array into 4 at a time
// NOTE: none of this works, I probably need state
// const columnSize = 4;
// const cardGrid = <div className="card-grid"></div>;
// const breaks = <br></br>;
// let cardsGrid = [];
// for (let i = 0; i < cards.length; i += columnSize) {
//   const chunk = cards.slice(i, i + columnSize);
//   cardsGrid.push(cardGrid + chunk + breaks);
// }
