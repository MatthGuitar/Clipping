

const Counter = () => {
  let clicks = 0
  function handleClick() {
    clicks += 1
    document.querySelector('#click').innerHTML = clicks
  }

  return (
    <>
      <button type='button' onClick={handleClick}>^</button>
      <p id='click'>0</p>
    </>
  )
}

export default Counter
