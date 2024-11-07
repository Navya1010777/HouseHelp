import React, { useEffect, useState } from "react";
import HelperCard from "../components/HelperCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/helpers.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";

const Helpers = () => {
  const [helpers, setHelpers] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    const data = await fetchData(`/helper/getallhelpers`);
    setHelpers(data);
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchAllDocs();
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container doctors">
          <h2 className="page-heading">Our House Help</h2>
          {helpers.length > 0 ? (
            <div className="doctors-card-container">
              {helpers.map((ele) => {
                return (
                  <HelperCard
                    ele={ele}
                    key={ele._id}
                  />
                );
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Helpers;
