import React, {useEffect, useState} from "react";
import { Card, CardContent, Button, Grid, Typography, Box } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import positionView from "./Position.jsx";
import {archetypes} from "./ArchetypeObjects.js";
function Archetype() {
  /*
    async function register() {
        alert("started!")
        const data = {

        };
        const response = await fetch('http://localhost:8080/Registration/Request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if (response.status === 200) {
            alert("Registered")
        } else {
            alert("Failed")
        }
    }


   */
   localStorage.setItem("position","pg");
   const position = localStorage.getItem("position")
    const positions = [
        {
            id: "Sharpshooter",
            name:  archetypes[position][Object.keys(archetypes[position]).at(0)].name,
            description: archetypes[position][Object.keys(archetypes[position]).at(0)].description,
            icon: "🏀",
        },
        {
            id: position,
            name: archetypes[position][Object.keys(archetypes[position]).at(1)].name,
            description: archetypes[position][Object.keys(archetypes[position]).at(1)].description,
            icon: "🔫",
        },
        {
            id: position,
            name: archetypes[position][Object.keys(archetypes[position]).at(2)].name,
            description: archetypes[position][Object.keys(archetypes[position]).at(2)].description,
            icon: "🦅",
        },
        {
            id: position,
            name: archetypes[position][Object.keys(archetypes[position]).at(3)].name,
            description: archetypes[position][Object.keys(archetypes[position]).at(3)].description,
            icon: "💪",
        },
        {
            id: position,
            name: archetypes[position][Object.keys(archetypes[position]).at(4)].name,
            description: archetypes[position][Object.keys(archetypes[position]).at(4)].description,
            icon: "🗼",
        },
    ];

    function PositionSelector({ onPositionSelect = () => {}, selectedPosition = "" }) {
        const [selected, setSelected] = useState(selectedPosition);

        const handleSelect = (position) => {
            setSelected(position.id);
            onPositionSelect(position);
        };

        return (
            <Box sx={{maxWidth: "1200px", margin: "auto", padding: "24px"}}>
                <Typography variant="h4" gutterBottom align="center">
                    Select Your Position
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom align="center">
                    Choose your basketball position to get customized training content.
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {positions.map((position) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={position.id}>
                            <Card
                                sx={{
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    boxShadow: selected === position.id ? 4 : 1,
                                    "&:hover": {
                                        boxShadow: 6,
                                    },
                                    border: selected === position.id ? "2px solid #1976d2" : "none",
                                }}
                                onClick={() => handleSelect(position)}
                            >
                                <CardContent sx={{textAlign: "center"}}>
                                    <Typography variant="h4" sx={{marginBottom: 2}}>
                                        {position.icon}
                                    </Typography>
                                    <Typography variant="h6" sx={{fontWeight: "bold"}}>
                                        {position.abbreviation}
                                    </Typography>
                                    {selected === position.id && (
                                        <CheckIcon sx={{color: "#1976d2", marginLeft: 1}}/>
                                    )}
                                    <Typography variant="body1" sx={{marginTop: 2}}>
                                        {position.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{marginTop: 1}}>
                                        {position.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{display: "flex", justifyContent: "center", marginTop: 3}}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            const position = positions.find((p) => p.id === selected);
                            if (position) onPositionSelect(position);
                            register(position.id);
                        }}
                        disabled={!selected}
                    >
                        Continue with {selected ? positions.find((p) => p.id === selected)?.name : "selected position"}
                    </Button>
                </Box>
            </Box>
        );
    }

    return (
        <PositionSelector
            onPositionSelect={(position) => {
                console.log("Selected position:", position);
            }}
        />
    );
}

export default Archetype;
