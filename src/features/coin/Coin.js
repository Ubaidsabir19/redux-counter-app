import { useSelector } from 'react-redux';

const Coin = () => {
  const coin = useSelector((state) => state.counter.coin);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh', 
      textAlign: 'center' 
    }}>
      <b>
        <span className="value" style={{ fontSize: '1.5em' }}>Coins: {coin}</span>
      </b>
    </div>
  );
};

export default Coin;
