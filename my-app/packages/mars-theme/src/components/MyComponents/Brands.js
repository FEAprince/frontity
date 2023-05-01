import ApiCall from "../../ApiCall";
import brand01 from "../../assets/images/brand-01.png";
import brand02 from "../../assets/images/brand-02.png";
import brand03 from "../../assets/images/brand-03.png";
import brand04 from "../../assets/images/brand-04.png";
import brand05 from "../../assets/images/brand-05.png";
import brand06 from "../../assets/images/brand-06.png";
import brand07 from "../../assets/images/brand-07.png";
import brand08 from "../../assets/images/brand-08.png";
import brand09 from "../../assets/images/brand-09.png";
import OptionApiCall from "../../optionApiCall";
function Brands() {
  const testData = OptionApiCall("options");
  console.log("test_111", testData);
  const { client_logo_list } = testData?.jsonData;
  const brands = [
    {
      imageUrl: brand01,
    },
    {
      imageUrl: brand02,
    },
    {
      imageUrl: brand03,
    },
    {
      imageUrl: brand04,
    },
    {
      imageUrl: brand05,
    },
    {
      imageUrl: brand06,
    },
    {
      imageUrl: brand07,
    },
    {
      imageUrl: brand08,
    },
    {
      imageUrl: brand09,
    },
  ];
  return (
    <>
      <ul className="brand-style-2">
        {client_logo_list?.map((res) => {
          return (
            <li>
              <img src={res?.client_logo?.url} alt="Logo Images" />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Brands;
