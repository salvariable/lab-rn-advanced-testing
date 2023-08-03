/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import { render, screen, fireEvent } from '@testing-library/react-native';
// import '@testing-library/jest-native/extend-expect';

// Game logic and requirements:
// 0. Declare 9 slots available in a 3x3 table
// 1. Turn is assigned randomly
// 2. Player in turn selects available space
// 3. Winner is announced when 3 marked spots are aligned

// Structure:
//    - Array of objects mapped on a flex'ed table within fixed dimensions
//    - Object type Slot: 'marked: boolean' and 'player: number'
//    - Two keys managed in State: player number and available slots
//    - Arrays for slot combinations (horizontal, vertical, diagonal)

// Player moves:
//    - Game starts with a random player number's turn
//    - Slot is a touchable item; player presses it to pass its id as owner
//    - Slot changes its rendered properties on player's press
//    - Game ends when:
//      a. Three marked slots with the same owner meet any slot combination
//      b. All slots are assigned
//    - If there is no winner, call it a tie


describe('TicTacToe App', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('should render game slots', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId('game-container').length).toBe(9);
    expect(getByTestId('player-turn')).toBe("S");
  })

  describe('should press empty slot on turn', () => {
    const activePlayer = 1;
    const { getByTestId } = render(<App player={activePlayer} />)

    const firstSlot = getByTestId('slot-0');
    fireEvent.press(firstSlot)
    expect(firstSlot.children.marked).toBe(true);
    expect(firstSlot.children.owner).toBe(activePlayer)
  })

  describe('should prevent player from selecting marked slot', () => {
    const activePlayer = 1;
    const { getByTestId } = render(<App player={activePlayer} />)

    const centerSlot = getByTestId('slot-4');
    fireEvent.press(centerSlot)
    const label = getByTestId('label');
    expect(label).toBe('That slot has already been picked!');
  })

  describe('should declare a winner', () => {
    const activePlayer = 2;
    const { getByTestId } = render(<App player={activePlayer} />)

    const availableSlots = getByTestId('available-slots');
    const label = getByTestId('label');
    expect(label).toBe('Player 2 is the winner!');
  })

  describe('should call a tie', () => {
    const { getByTestId } = render(<App player={activePlayer} />)

    const container = getByTestId('game-container');
    const availableSlots = container.find({ marked: false });
    const label = getByTestId('label');
    expect(availableSlots).toBe(false);
    expect(label).toBe('This is a tie!');
  })
})