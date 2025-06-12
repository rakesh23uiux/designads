import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { Button } from '../../atoms/Button';

export interface SearchBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Callback fired when the search value changes
   */
  onChange?: (value: string) => void;
  
  /**
   * Callback fired when search is submitted
   */
  onSearch?: (value: string) => void;
  
  /**
   * Placeholder text for the search input
   */
  placeholder?: string;
  
  /**
   * Whether to show the search button
   */
  showButton?: boolean;
  
  /**
   * Text for the search button
   */
  buttonText?: string;
  
  /**
   * Size variant of the search box
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether the search box is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the search box is in loading state
   */
  loading?: boolean;
  
  /**
   * Initial value for the search input
   */
  defaultValue?: string;
}

export const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      onChange,
      onSearch,
      placeholder = 'Search...',
      showButton = true,
      buttonText = 'Search',
      size = 'md',
      disabled = false,
      loading = false,
      defaultValue = '',
      className,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(defaultValue);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onChange?.(newValue);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSearch?.(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onSearch?.(value);
      }
    };

    const searchBoxClasses = clsx(
      'search-box',
      `search-box--${size}`,
      {
        'search-box--disabled': disabled,
        'search-box--loading': loading,
      },
      className
    );

    const inputClasses = clsx(
      'search-box__input',
      `search-box__input--${size}`
    );

    return (
      <form className={searchBoxClasses} onSubmit={handleSubmit}>
        <div className="search-box__input-wrapper">
          <svg
            className="search-box__icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            ref={ref}
            type="text"
            className={inputClasses}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={disabled || loading}
            {...props}
          />
        </div>
        
        {showButton && (
          <Button
            type="submit"
            size={size}
            disabled={disabled}
            loading={loading}
            className="search-box__button"
          >
            {buttonText}
          </Button>
        )}
      </form>
    );
  }
);

SearchBox.displayName = 'SearchBox'; 