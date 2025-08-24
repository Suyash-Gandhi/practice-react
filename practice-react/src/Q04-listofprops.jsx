function Q4listofprops({ items }) {
  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>{item.key} : {item.value}</li>
      ))}
    </ol>
  )
}

export default Q4listofprops