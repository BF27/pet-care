import { Fragment, useContext, useEffect, useState } from "react";
import { Table, TableBody, Box, Typography } from "@mui/material";
import TableHeader from "./components/TableHeader";
import { db } from "../../utils/initFirebase";
import { doc, getDoc } from "firebase/firestore";
import MainTableRow from "./components/MainTableRow";
import CollapsingRow from "./components/CollapsingRow";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const user = useContext(UserContext);
  const [animals, setAnimals] = useState([]);
  const [expandedAnimalId, setExpandedAnimalId] = useState(null);

  const changeExpandedAnimalId = (id) => {
    setExpandedAnimalId(id);
  };

  const changeAnimals = (newAnimals) => {
    setAnimals(newAnimals);
  };

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef)
        .then((item) => setAnimals(item.data().pets))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  return (
    <>
      <Box
        component={"main"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          width: "clamp(280px, 40vw, 1000px)",
          border: 1,
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        <Typography variant="h2">Your Pet list</Typography>
        <Table>
          <TableHeader />
          <TableBody>
            {animals.map((animal, i) => (
              <Fragment key={i}>
                <MainTableRow
                  animal={animal}
                  expandedAnimalId={expandedAnimalId}
                  changeExpandedAnimalId={changeExpandedAnimalId}
                />
                <CollapsingRow
                  animal={animal}
                  expandedAnimalId={expandedAnimalId}
                  animals={animals}
                  changeAnimals={changeAnimals}
                />
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default Dashboard;
