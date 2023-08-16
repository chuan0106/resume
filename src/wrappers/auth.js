import { Redirect } from 'umi'
import { connect } from 'dva';
// 路由权限
const index = ({ children, globalSecret }) =>
{
    // const isLogin = false
    // 是否有权限
    if (globalSecret)
    {
        return <div>{children}</div>;
    } else
    {
        return <Redirect to="/login" />;
    }
}


function mapStateToProps ({ global })
{
    return {
        globalSecret: global.secret
    };
}
export default connect(mapStateToProps)(index);
