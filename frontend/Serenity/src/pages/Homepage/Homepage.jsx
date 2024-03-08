import './homepage.css';
import { Button, Card, Text, TextField } from '@radix-ui/themes';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Homepage = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const toggleExpand = (e) => {
    if (!e.target.matches('input')) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="homepage-container">
      <div className="container ">
        <div className="header-wrapper fade-in">
          <div className="header">
            <h1>Serenity</h1>
            <img src="src/assets/logo.png" className="logo" />
          </div>

          <h2 className="description">Relieve Stress By Breathing</h2>
        </div>

        <div className="card" onClick={toggleExpand}>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="card-content"
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card variant="classic" className="signup-card">
                  <form onSubmit={handleSubmit}>
                    <div className="name">
                      <TextField.Input
                        type="text"
                        id="name"
                        placeholder="Name"
                        onChange={handleEmailChange}
                      />
                    </div>

                    <div className="email">
                      <TextField.Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleEmailChange}
                      />
                    </div>

                    <div className="password">
                      <TextField.Input
                        placeholder="Password"
                        type="password"
                        id="password"
                        onChange={handlePasswordChange}
                      />
                    </div>

                    <div className="password">
                      <TextField.Input
                        placeholder="Retype Password"
                        type="password"
                        id="retype-password"
                        onChange={handlePasswordChange}
                      />
                    </div>

                    <p>
                      Already have an account? Login{' '}
                      <span style={{ color: 'blue', cursor: 'pointer' }}>
                        here.
                      </span>
                    </p>

                    <Button
                      type="submit"
                      color="teal"
                      size={'3'}
                      style={{ marginTop: '10px' }}
                    >
                      Sign Up
                    </Button>
                  </form>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="btn-wrapper fade-in">
          <Button color="teal" size={'3'} onClick={toggleExpand}>
            Sign Up
          </Button>
          <Button color="teal" variant="surface" size={'3'}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
