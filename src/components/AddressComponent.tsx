import React from "react";
import { RootState } from "../modules";
import { useSelector } from "react-redux";
import AddressVo from "../vo/AddressVo";
import { useHistory } from "react-router";

const AddressComponent = () => {
  const router = useHistory();

  const addressVoList: AddressVo[] = useSelector(
    (state: RootState) => state.ADDRESS_SWITCH.addressVoList
  );

  const detailAddressInfo = (name: string) => {
    console.log("상세보기 ----");
    console.log(name);
    router.push(`/detailAddress/${name}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h5>주소록</h5>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>이름</th>
                <th>전화번호</th>
              </tr>
            </thead>
            <tbody>
              {addressVoList.map((v, index) => (
                <tr key={index} onClick={() => detailAddressInfo(v.name)}>
                  <td>{index}</td>
                  <td>{v.name}</td>
                  <td>{v.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddressComponent;
