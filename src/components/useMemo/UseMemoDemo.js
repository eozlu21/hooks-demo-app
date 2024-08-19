import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../custom/Button";

// Function to find the smallest prime number greater than a given number
const findNextPrime = (num) => {
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  };
  let nextPrime = num + 1;
  while (!isPrime(nextPrime)) {
    nextPrime++;
  }
  return nextPrime;
};

const UseMemoDemo = () => {
  const [number, setNumber] = useState(0);
  const [nextPrime, setNextPrime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const computeNextPrime = async () => {
      setIsLoading(true);

      // Simulate a long computation
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const prime = findNextPrime(number);
      setNextPrime(prime);
      setIsLoading(false);
    };

    computeNextPrime();
  }, [number]);

  const handleChangeNumber = () => {
    const newNumber = parseInt(prompt("Enter a new number:"), 10);
    if (isNaN(newNumber)) {
      alert("Please enter a valid number");
    } else {
      setNumber(newNumber);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "300px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2>Prime Number Finder</h2>
      <p>
        <strong>Current Number:</strong> {number}
      </p>
      <p>
        <strong>Next Prime:</strong> {isLoading ? "Loading..." : nextPrime}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Button onClick={handleChangeNumber}>Change Number</Button>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </div>
  );
};

export default UseMemoDemo;
