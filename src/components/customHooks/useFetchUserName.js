import { useEffect, useState } from 'react';
import { readUserData } from '../../fbServices/fbDB';
import { Ctx } from '../../context/LanguageContext';

export const useHandleDisplayUserName = () => {
  const [displayUserName, setDisplayUserName] = useState('');
  const { userName } = Ctx();

  useEffect(() => {
    const fetchUserName = async () => {
      if (userName && userName.uid) {
        const user = await readUserData(userName.uid);

        if (user) {
          setDisplayUserName(user.username.toUpperCase());
        } else {
          setDisplayUserName('');
        }
      } else {
        setDisplayUserName('');
      }
    };
    fetchUserName();
  }, [userName]);

  return displayUserName;
};
