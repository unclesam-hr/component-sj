import React from "react";



 const ShipModal = (props) =>
      <div className="flag-modal" >
        <div className="modal-container">
        <div id="x-button" onClick={() => props.closeModal()}>x</div>
          <h1 id="modal-header">Available In Over 60 Countries!</h1>
          <h6 id="modal-subheader">
            Please select your desired shipping destination:
          </h6>
          <div className="modal-countries">
            <form>
              <div className="modal-flag-selector">
                <div id="americas">
                  <h2 className="region-header">Americas</h2>
                  <div id="country-col-1">
                    <ul>
                      <li className="country-item">
                        <span className="flag">🇦🇬</span>Antigua & Barbuda
                      </li>
                      <li className="country-item">
                        <span className="flag">🇦🇼</span>Aruba
                      </li>
                      <li className="country-item">
                        <span className="flag">🇧🇧</span>Barbados
                      </li>
                      <li className="country-item">
                        <span className="flag">🇧🇿</span>Belize
                      </li>
                      <li className="country-item">
                        <span className="flag">🇧🇲</span>Bermuda
                      </li>
                      <li className="country-item">
                        <span className="flag">🇧🇴</span>Bolivia
                      </li>
                      <li className="country-item">
                        <span className="flag">🇧🇷</span>Brazil
                      </li>
                      <li className="country-item">
                        <span className="flag">🇨🇦</span>Canada
                      </li>
                      <li className="country-item">
                        <span className="flag">🇰🇾</span>Cayman Islands
                      </li>
                      <li className="country-item">
                        <span className="flag">🇨🇱</span>Chile
                      </li>
                      <li className="country-item">
                        <span className="flag">🇨🇴</span>Colombia
                      </li>
                      <li className="country-item">
                        <span className="flag">🇨🇷</span>Costa Rica
                      </li>
                      <li className="country-item">
                        <span className="flag">🇩🇲</span>Dominica
                      </li>
                      <li className="country-item">
                        <span className="flag">🇩🇴</span>Dominican Republic
                      </li>
                      <li className="country-item">
                        <span className="flag">🇪🇨</span>Ecuador
                      </li>
                      <li className="country-item">
                        <span className="flag">🇸🇻</span>El Salvador
                      </li>
                      <li className="country-item">
                        <span className="flag">🇬🇩</span>Grenada
                      </li>
                      <li className="country-item">
                        <span className="flag">🇬🇹</span>Guatemala
                      </li>
                      <li className="country-item">
                        <span className="flag">🇭🇳</span>Honduras
                      </li>
                    </ul>
                  </div>
                  <div id="country-col-2">
                    <ul>
                      <li className="country-item">
                        <span className="flag">🇯🇲</span>Jamaica
                      </li>
                      <li className="country-item">
                        <span className="flag">🇲🇸</span>Montserrat
                      </li>
                      <li className="country-item">
                        <span className="flag">🇳🇮</span>Nicaragua
                      </li>
                      <li className="country-item">
                        <span className="flag">🇵🇦</span>Panama
                      </li>
                      <li className="country-item">
                        <span className="flag">🇵🇾</span>Paraguay
                      </li>
                      <li className="country-item">
                        <span className="flag">🇵🇪</span>Peru
                      </li>
                      <li className="country-item">
                        <span className="flag">🇰🇳</span>Saint Kitts & Nevis
                      </li>
                      <li className="country-item">
                        <span className="flag">🇱🇨</span>Saint Lucia
                      </li>
                      <li className="country-item">
                        <span className="flag">🇹🇹</span>Trinidad & Tobago
                      </li>
                      <li className="country-item">
                        <span className="flag">🇹🇨</span>Turks & Caicos Islands
                      </li>
                      <li className="country-item">
                        <span className="flag">🇺🇸</span>United States
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="europe">
                  <h2 className="region-header">Europe*</h2>
                  <ul id="country-col-1">
                    <li className="country-item">
                      <span className="flag">🇲🇨</span>Monaco
                    </li>
                    <li className="country-item">
                      <span className="flag">🇷🇺</span>Russian Federation
                    </li>
                    <li className="country-item">
                      <span className="flag">🇹🇷</span>Turkey
                    </li>
                    <li className="country-item">
                      <span className="flag">🇬🇧</span>United Kingdom
                    </li>
                  </ul>
                </div>
                <div id="asia-pacific">
                  <h2 className="region-header">Asia/Pacific</h2>
                  <ul id="country-col-1">
                    <li className="country-item">
                      <span className="flag">🇦🇺</span>Australia
                    </li>
                    <li className="country-item">
                      <span className="flag">🇧🇩</span>Bangladesh
                    </li>
                    <li className="country-item">
                      <span className="flag">🇧🇳</span>Brunei Darussalam
                    </li>
                    <li className="country-item">
                      <span className="flag">🇰🇭</span>Cambodia
                    </li>
                    <li className="country-item">
                      <span className="flag">🇨🇳</span>China
                    </li>
                    <li className="country-item">
                      <span className="flag">🇭🇰</span>Hong Kong
                    </li>
                    <li className="country-item">
                      <span className="flag">🇮🇳</span>India
                    </li>
                    <li className="country-item">
                      <span className="flag">🇮🇩</span>Indonesia
                    </li>
                    <li className="country-item">
                      <span className="flag">🇯🇵</span>Japan
                    </li>
                    <li className="country-item">
                      <span className="flag">🇰🇷</span>Republic Of Korea
                    </li>
                    <li className="country-item">
                      <span className="flag">🇲🇴</span>Macao
                    </li>
                  </ul>
                  <ul id="country-col-2">
                    <li className="country-item">
                      <span className="flag">🇲🇻</span>Maldives
                    </li>
                    <li className="country-item">
                      <span className="flag">🇳🇿</span>New Zealand
                    </li>
                    <li className="country-item">
                      <span className="flag">🇵🇭</span>Philippines
                    </li>
                    <li className="country-item">
                      <span className="flag">🇸🇬</span>Singapore
                    </li>
                    <li className="country-item">
                      <span className="flag">🇱🇰</span>Sri Lanka
                    </li>
                    <li className="country-item">
                      <span className="flag">🇹🇼</span>Taiwan
                    </li>
                    <li className="country-item">
                      <span className="flag">🇹🇭</span>Thailand
                    </li>
                  </ul>
                </div>
                <div id="middle-east">
                  <h2 className="region-header">Middle East</h2>
                  <ul id="country-col-1">
                    <li className="country-item">
                      <span className="flag">🇮🇱</span>Israel
                    </li>
                    <li className="country-item">
                      <span className="flag">🇰🇼</span>Kuwait
                    </li>
                    <li className="country-item">
                      <span className="flag">🇸🇦</span>Saudi Arabia
                    </li>
                    <li className="country-item">
                      <span className="flag">🇦🇪</span>United Arab Emirates
                    </li>
                  </ul>
                </div>
              </div>
              <div className="currency-container">
              <div className="currency-selector">
                <label for="currencyCode">
                  Please select your preferred currency:
                </label>
                <select>
                  <option>Australian Dollar</option>
                  <option>Bahraini Dinar</option>
                  <option>Balboa</option>
                  <option>Barbados Dollar</option>
                  <option>Belize Dollar</option>
                  <option>Boliviano</option>
                  <option>British Pound</option>
                  <option>Canadian Dollar</option>
                  <option>Cayman Islands Dollar</option>
                  <option>Chilean Peso</option>
                  <option>Colombian Peso</option>
                  <option>Cordoba Oro</option>
                  <option>Costa Rican Colon</option>
                  <option>Dominican Peso</option>
                  <option>Egyptian Pound</option>
                  <option>Euro</option>
                  <option>Guarani</option>
                  <option>Hong Kong Dollar</option>
                  <option>Indian Rupee</option>
                  <option>Israeli Shekel</option>
                  <option>Jamaican Dollar</option>
                  <option>Japanese Yen</option>
                  <option>Jordanian Dinar</option>
                  <option>Korean Won</option>
                  <option>Kuwaiti Dinar</option>
                  <option>Lempira</option>
                  <option>New Zealand Dollar</option>
                  <option>Omani Rial</option>
                  <option>Pakistan Rupee</option>
                  <option>Peruvian Nuevo Sol</option>
                  <option>Philippine Peso</option>
                  <option>Qatari Riyal</option>
                  <option>Quetzal</option>
                  <option>Riel</option>
                  <option>Rufiyaa</option>
                  <option>Russian Ruble</option>
                  <option>Saudi Riyal</option>
                  <option>Singapore Dollar</option>
                  <option>South African Rand</option>
                  <option>Sri Lanka Rupee</option>
                  <option>Taiwan Dollar</option>
                  <option>Taka</option>
                  <option>Thai Baht</option>
                  <option>Turkish Lira</option>
                  <option>US Dollar</option>
                  <option>United Arab Emirates Dirham</option>
                  <option>Yuan Renminbi</option>
                </select>
              </div>
              <div className="currency-button">
                <button>
                    Update Country + Currency
                </button>
              </div>
              </div>
            </form>
          </div>
          <div className="international-disclaimer">
              <p>
                PLEASE NOTE: APO/FPO customers should proceed as U.S. customers. Some items are not eligible for international shipping. Please look for eligibility notifications on our product pages, or view our guidelines to see which items are ineligible. All international orders must have a ship–to destination outside of the United States. For orders to U.S. addresses with an international billing address, call Customer Service to place your order. Free Shipping promotions cannot be applied to International Orders. You can view your complete order total, including shipping fees, custom tariffs and taxes, during checkout.
              </p>
              <p>
                *Due to new European privacy rules we can no longer ship to the following countries: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, French Guiana, Germany, Gibraltar, Greece, Guadeloupe, Guernsey, Hungary, Iceland, Ireland, Italy, Jersey, Latvia, Lichtenstein, Lithuania, Luxembourg, Malta, Martinique, Netherlands, Norway, Poland, Portugal, Reunion, Romania, Slovakia, Slovenia, Spain, Sweden, and Switzerland.
              </p>
              <p>
                Learn More About International Shipping.
              </p>
          </div>
        </div>
      </div>


export default ShipModal;
