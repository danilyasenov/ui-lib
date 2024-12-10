import Button from "./components/Button"

function App(){
  return (
      <div>
        <div>
        <Button variant="bordered" size="sm">Confirm</Button>
        <Button variant = "bordered" size = "md">Confirm</Button>
        <Button variant="bordered" size="lg">Confirm</Button>
        </div>
        <Button size="sm">Cancel</Button>
        <Button size = "md">Cancel</Button>
        <Button size="lg">Cancel</Button>
      </div>
  );
}

export default App;