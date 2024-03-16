import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import { IDataType } from "../models";
import { webApiServices } from "../../../services";

export const PageContextDashboard = createContext<any | null>(null);

export const PageContextProviderDashboard = ({
  children,
}: {
  children: ReactNode;
}) => {
    const {formData, setFormData} = usePageContexStoreDashboard()
    const [isData, setIsData] = useState<number>(-1)

    
    const loadData = () =>{
        setIsData(1)
        setFormData({...formData, loading: true })
        webApiServices.getLoadServices().then((resp) => resp).then((data) => {
            if (data.length > 0) {
                setFormData({...formData, loading: false, data})
            }
        }).catch((error: unknown) => {
            const err = error as  Error
            console.log('Error Obtener Listado Usuario', err.message)
            setFormData({...formData, loading: false})
        })
    }



    useEffect(() => {
        isData === -1 && setTimeout(() => {loadData()},1000) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


  return (
    <PageContextDashboard.Provider 
        value={{
            formData, 
            setFormData,
            loadData}}
    >
        {isData === 1 ? children : 'Obteniendo información...'}
    </PageContextDashboard.Provider>
  );
};

export const usePageContexStoreDashboard = () => {
  const [formData, setFormData] = useState<{
    loading: boolean;
    data: IDataType | null;
  }>({
    loading: false,
    data: null,
  });
  return {
    formData,
    setFormData,
  };
};

export const usePageContextDashboad = () => {
  const pageContext = useContext(PageContextDashboard);
  if (pageContext === undefined) {
    throw new Error("Error Context Dashbador");
  }
  return pageContext;
};
