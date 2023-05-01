import ApiCall from "../../../ApiCall";

function AboutUsCountUpArea() {
  const apiData = ApiCall("about");
  const headerData = apiData?.jsonData[0]?.acf;
  return (
    <div className="rn-counterup-area pb--120 bg_color--1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h4
                className="fontWeight500"
                dangerouslySetInnerHTML={{
                  __html: headerData?.about_sort_description,
                }}
              ></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUsCountUpArea;
