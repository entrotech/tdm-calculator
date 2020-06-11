import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import RuleCalculationPanels from "../RuleCalculation/RuleCalculationPanels";
import clsx from "clsx";
import PlanningIcon from "../../../images/planning.png";
import WarningIcon from "../../../images/warning-icon.png";

const useStyles = createUseStyles({
  page4: {
    "&.level0 + div > div:first-child > .tdm-wizard-nav-button:last-child": {
      visibility: "hidden"
    },
    "&.level0 + div > div > .tdm-wizard-nav-button.return-home-button": {
      display: "block"
    }
  },
  level0Container: {
    textAlign: "center",

    "& h1": {
      fontFamily: "Oswald",
      fontWeight: "bold",
      fontSize: "30px",
      lineHeight: "44px",
      marginTop: "22px"
    }
  },
  level0Message: {
    marginTop: "20px",
    maxWidth: "800px",
    backgroundColor: "#FEF4F2",
    color: "#B64E38",
    fontSize: "22px",
    lineHeight: "38px",
    padding: "60px 48px 40px",
    textAlign: "initial",
    boxSizing: "border-box",

    "& p": {
      marginLeft: "44px"
    }
  },
  warningIcon: {
    float: "left"
  },
  projectBox: {
    backgroundColor: "#E5EAF0",
    "& h4": {
      backgroundColor: "#002E6D",
      color: "white",
      fontFamily: "Oswald, Calibri",
      fontSize: 22,
      padding: "12px 0",
      display: "flex",
      "&:first-of-type": {
        paddingTop: 30
      },
      "&:last-of-type": {
        paddingBottom: 30
      }
    },
    "& > div": {
      paddingBottom: 20,
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: 22
    }
  },
  PLValue: {
    marginLeft: ".5em",
    fontSize: 40,
    fontWeight: "bold",
    width: "2em",
    textAlign: "right",
    position: "relative",
    bottom: 6
  },
  PLLabel: {
    flex: 2,
    maxWidth: "55%",
    textAlign: "right"
  }
});

function ProjectTargetPoints(props) {
  const classes = useStyles();
  const { rules, onInputChange } = props;
  const projectLevel = rules.find(e => e.id === 16);
  const targetValue = rules.find(e => e.id === 237);

  const level0Class =
    projectLevel && projectLevel.calcValue === 0 ? "level0" : "";
  // removing the parking input rule to display it above the box
  const parkingInputIndex = rules.findIndex(e => e.id === 7);
  const parkingRule = rules.splice(parkingInputIndex, 1);
  return (
    <div className={clsx(classes.page4, level0Class)}>
      {projectLevel && projectLevel.calcValue === 0 && (
        <div className={classes.level0Container}>
          <img src={PlanningIcon} alt="" />
          <h1>Your project level is 0!</h1>
          <div className={classes.level0Message}>
            <img src={WarningIcon} className={classes.warningIcon} alt="" />
            <p>
              Based on the information you provided, the Transportation Demand
              Management (TDM) Ordinance <strong>may</strong> not apply to your
              project.
            </p>
            <p>
              Final determination of the TDM Ordinance applicability will be
              made by the Department of City Planning upon review of your
              project application.
            </p>
          </div>
        </div>
      )}
      {projectLevel && projectLevel.calcValue > 0 && (
        <div>
          <h1 className="tdm-wizard-page-title">Calculate TDM Target Points</h1>
          <h3 className="tdm-wizard-page-subtitle">
            Enter the amount of parking spaces you will provide to determine
            your TDM target number
          </h3>
          <RuleCalculationPanels
            rules={parkingRule}
            onInputChange={onInputChange}
            suppressHeader
          />
          <div className={classes.projectBox}>
            <h4>
              <span className={classes.PLLabel}>Your project level </span>
              <span className={classes.PLValue}>
                {(projectLevel && projectLevel.calcValue) || ""}
              </span>
            </h4>
            <h4>
              <span className={classes.PLLabel}>Your target points </span>
              <span className={classes.PLValue}>
                {(targetValue && targetValue.calcValue) || ""}
              </span>
            </h4>
            <RuleCalculationPanels
              rules={rules}
              onInputChange={onInputChange}
              suppressHeader
            />
          </div>
        </div>
      )}
    </div>
  );
}
ProjectTargetPoints.propTypes = {
  rules: PropTypes.array.isRequired,
  onInputChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default ProjectTargetPoints;
