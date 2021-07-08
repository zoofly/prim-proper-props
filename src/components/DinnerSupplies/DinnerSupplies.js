function DinnerSupplies(props){
    return(
        <>
        <h2>Dinner Supplies</h2>
      <div>
        Spoons: {props.list.length * 2}
      </div>
      <div>
        Forks: {props.list.length * 2}
      </div>
      <div>
        Knives: {props.list.length * 2}
      </div>
        </>
    );
}

export default DinnerSupplies;