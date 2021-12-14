import { Tooltip, OverlayTrigger } from "react-bootstrap";

const CoinStats = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <button variant="success">Hover me to see</button>
    </OverlayTrigger>
  );
};

export default CoinStats;
