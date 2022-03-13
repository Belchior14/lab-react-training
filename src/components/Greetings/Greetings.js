import "./Greetings.css"

export function Greetings({lang, children}) {
  if (lang === 'de') {
    return (
      <div className="greetings">
        <p>Hallo {children} </p>
      </div>
    );
  }  if (lang === 'en') {
    return (
      <div className="greetings">
        <p>Hello {children} </p>
      </div>
    );
  } if (lang === 'es') {
    return (
      <div className="greetings">
        <p>Hola {children} </p>
      </div>
    );
  }  if (lang === 'fr') {
    return (
      <div className="greetings">
        <p>Bonjour {children} </p>
      </div>
    )
  } else {
    return (
        <div className="greetings">
          <p>Olá! {children} </p>
        </div>
      )
  }
}
