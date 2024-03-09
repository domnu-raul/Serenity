import React from 'react';
import './AppPage.css';
import { Text, Card, Inset } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

function AppPage() {
  const navigate = useNavigate();

  const navigateToExercise = () => {
    navigate('/exercise');
  };
  return (
    <div className="app-container">
      <div className="header-wrapper-app">
        <h1 className="header-app">Serenity</h1>
        <img src="src/assets/logo.png" className="logo-app" />
      </div>

      <div className="app-cards-wrapper">
        <div className="app-card">
          <Card variant="classic">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1465409042654-5314e9d1754b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 160,
                  objectPosition: 'center',
                }}
                onClick={navigateToExercise}
              />
            </Inset>
            <Text as="p" size="3">
              Breathing Exercises
            </Text>
          </Card>
        </div>

        <div className="app-card">
          <Card variant="classic">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 160,
                }}
              />
            </Inset>
            <Text as="p" size="3">
              View Your Statistics
            </Text>
          </Card>
        </div>

        <div className="app-card">
          <Card variant="classic">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 160,
                }}
              />
            </Inset>
            <Text as="p" size="3">
              Create A Journal
            </Text>
          </Card>
        </div>

        <div className="app-card">
          <Card variant="classic">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 160,
                }}
              />
            </Inset>
            <Text as="p" size="3">
              View Previous Journals
            </Text>
          </Card>
        </div>

        <div className="app-card">
          <Card variant="classic">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src="https://images.pexels.com/photos/5038897/pexels-photo-5038897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 160,
                }}
              />
            </Inset>
            <Text as="p" size="3">
              Relax Your Muscles
            </Text>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AppPage;
