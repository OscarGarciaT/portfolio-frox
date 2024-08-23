import { Card, CardContent, Divider, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const CronogramaMIDI = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const schedule = [
    {
      title: "Ideación y lluvia de ideas",
      start: "03/06/24",
      end: "08/06/24",
      link: "ideacion",
    },
    {
      title: "Selección de las mejores ideas",
      start: "08/06/24",
      end: "09/06/24",
      link: "mejoresideas",
    },
    {
      title: "Desarrollo de un prototipo no funcional",
      start: "01/07/24",
      end: "12/07/24",
      link: "prototipo",
    },
    {
      title: "Selección de la mejor idea para desarrollo",
      start: "12/07/24",
      end: "13/07/24",
      link: "mejoridea",
    },
    {
      title: "Decidir las tecnologías a utilizar",
      start: "25/07/24",
      end: "01/08/24",
      link: "tecnologias",
    },
    {
      title: "Primera Semana de desarrollo",
      start: "02/08/24",
      end: "08/08/24",
      link: "desarrollo1",
    },
    {
      title: "Segunda Semana de desarrollo",
      start: "15/08/24",
      end: "22/08/24",
      link: "desarrollo2",
    },
    {
      title: "Playtesting",
      start: "22/08/24",
      end: "24/08/24",
      link: "playtesting",
    },
  ];

  const updateURL = (section) => {
    const params = new URLSearchParams(location.search);
    params.set("section", section);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <>
      <Divider className="mt-10" />
      <div className="flex justify-center items-center my-5 mx-0 md:mx-20 rounded-lg  bg-green-200">
        <motion.div className="flex w-full justify-center items-center">
          <Typography className="text-center" fontSize={"4rem"}>
            Cronograma
          </Typography>
        </motion.div>
      </div>
      <Divider className="mb-10" />
      {schedule.map((item, index) => (
        <Card key={index} className="mb-4 shadow-md">
          <CardContent>
            <Link
              onClick={() => updateURL(item.link)}
              className="no-underline text-blue-500 hover:underline"
            >
              <Typography variant="h6" component="div" className="font-bold">
                {item.title}
              </Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" className="mt-2">
              Inicio: {item.start} - Fin: {item.end}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CronogramaMIDI;
