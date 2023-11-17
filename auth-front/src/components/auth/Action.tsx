type ActionProps = {
    setBy: React.Dispatch<React.SetStateAction<string>>;
  };
  
  const Action: React.FC<ActionProps> = ({ setBy }) => {
    return (
      <div className="action-outer">
        <div className="intro-btn" onClick={() => setBy('email')}>
          <h1>Registration By Email</h1>
        </div>
  
        <div className="intro-btn" onClick={() => setBy('wallet')}>
          <h1>Registration By Wallet</h1>
        </div>
      </div>
    );
  };
  
  export default Action;