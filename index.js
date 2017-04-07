t7.setOutput(t7.Outputs.React);

t7.module(t7 => {
  const MyButton = props => t7`
    <div onClick=${props.onClick} style=${{ background: "#ff0", width: 100 }}>
      Click Me!
    </div>
  `;

  t7.assign("MyButton", MyButton);

  const Application = () => t7`
    <div>
      <h1>React t7 Example</h1>
      <MyButton onClick=${() => console.log("clicked!")} />
    </div>
  `;

  t7.assign("Application", Application);

  const vdom = t7`<Application />`;
  const target = document.getElementById("app");

  ReactDOM.render(vdom, target);
});
