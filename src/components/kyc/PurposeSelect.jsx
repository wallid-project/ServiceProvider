import React from "react";

import store from "../../js/store/index";
import { setYourPurpose } from "../../js/actions/index";
import { setCreditState } from "../../js/actions/index";
import { CREDIT_STATE } from "../../js/constants/action-types";

class PurposeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yourPurpose: store.getState().yourPurpose
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    store.subscribe(() => {
      this.setState({
        yourPurpose: store.getState().yourPurpose,
        creditState: store.getState().creditState
      });
    });
  }

  handleSubmit(event) {
    console.log("CREDIT_STATE_IDENTITY_SELECT");
    store.dispatch(
      setCreditState(CREDIT_STATE["CREDIT_STATE_IDENTITY_SELECT"])
    );
  }

  handleChange(event) {
    console.log("handleChange");
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
    store.dispatch(setYourPurpose(event.target.value));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-8 headerTextImportId">
            <h2>Step 1 - Funding purpose and values</h2>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-sm-12 col-md-12">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <br />
                <label className="text-white">Select the purpose:</label>
                <select
                  class="form-control"
                  name="yourPurpose"
                  required
                  onChange={this.handleChange}
                >
                  <option value="" selected disabled>
                    Select the purpose
                  </option>
                  <option value="NewCar">New Car</option>
                  <option value="NewHouse">New House</option>
                  <option value="Construction">University degree</option>
                  <option value="Private">Holidays</option>
                </select>

                <label className="text-white">
                  How much funding do you need : (total in euros)
                </label>
                <input
                  type="text"
                  name="walletAddress"
                  onChange={this.handleChange}
                  class="form-control"
                  required
                />
                <label className="text-white">
                  How often would you like to receive payment tranches? monthly,
                  every 3 month, every 6 month, once a year
                </label>
                <select class="form-control" required>
                  <option value="" selected disabled>
                    Select how often you like to receive
                  </option>
                  <option>monthly</option>
                  <option>every 3 month</option>
                  <option>every 6 month</option>
                  <option>once a year</option>
                </select>
              </div>
              <div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Next Step"
                    className="btn btn-block btn-lg btnStyle btnNext"
                  />
                  <p className="text-center">
                    <a className="text-white" href="https://metamask.io/">
                      what it means?
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PurposeSelect;