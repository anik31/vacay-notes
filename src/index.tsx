import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ArchiveProvider, AuthProvider, NoteProvider, TrashProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NoteProvider>
          <ArchiveProvider>
            <TrashProvider>
              <App />
            </TrashProvider>
          </ArchiveProvider>
        </NoteProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

