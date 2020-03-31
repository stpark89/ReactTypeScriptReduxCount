import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import AddressVo from "../vo/AddressVo";

interface paramString {
  name: string;
}

const DetailAddressComponent = () => {
  // 넘어온 파라미터를 받음.
  const routeParams = useParams<paramString>();

  const addressVoList: AddressVo[] = useSelector(
    (state: RootState) => state.ADDRESS_SWITCH.addressVoList
  );

  const detailVo = addressVoList.filter(v => v.name === routeParams.name);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <img
                className="card-img-top"
                src="img_avatar3.png"
                alt="이미지"
              />
              <h4 className="card-title">{detailVo[0].name}</h4>
              <p className="card-text">전화번호 : {detailVo[0].phoneNumber}</p>
              <button className="btn btn-primary">See Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailAddressComponent;
