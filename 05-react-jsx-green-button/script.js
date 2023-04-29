const App = ( {initialButtonText, initialClassesList} ) => {
  const [ buttonText, setButtonText ] = React.useState(initialButtonText)
  const [ classeeList, setClasseeList ] = React.useState(initialClassesList)

  const onButtonClick = () => {
    setButtonText('Hello From React!')
    setClasseeList('green-btn')
  }

  return (
    <div className='app'>
      <button className={ classeeList } onClick={ onButtonClick }>
        { buttonText }
      </button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

root.render(<App initialButtonText='Click me please' initialClassesList='' />)
