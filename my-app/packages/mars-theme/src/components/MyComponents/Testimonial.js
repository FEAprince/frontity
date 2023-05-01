import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
function Testimonial() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Tabs>
            <TabPanel>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>
                    Aklima The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    Bonorum et Malorum original.
                  </p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>Aklima </span> - COO, AMERIMAR ENTERPRISES, INC.
                  </h6>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>
                    Fatima Asrafy standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    Bonorum et Malorum original.
                  </p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES,
                    INC.
                  </h6>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
