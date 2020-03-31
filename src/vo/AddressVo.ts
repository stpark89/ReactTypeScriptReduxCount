export interface IAddressVo {
  name: string;
  phoneNumber: string;
}

export default class AddressVo implements IAddressVo {
  public name: string;
  public phoneNumber: string;
}

export const create = ({ name, phoneNumber }: IAddressVo) => {
  const next = new AddressVo();
  next.name = name;
  next.phoneNumber = phoneNumber;
  return next;
};
