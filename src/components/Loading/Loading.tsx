import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../protocols/root-state';

export default function LoadingPulse() {
  const isLoading = useSelector((state: RootState) => state.isLoading);  

  return isLoading ? (
    <div className="LoadingPulseBox">
      <div className="LoadingPulse"></div>
    </div>
  ) : <></>
}