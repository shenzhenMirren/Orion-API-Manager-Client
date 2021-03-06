import request from './utils/Request'

/**
 * 获取项目列表
 * @param {Object} token 用户的token
 * @param {Object} res
 * @param {Object} err
 */
export function findProjectListAPI(token, res, err) {
	request.get('/private/project', {
		headers: {
			'x-session': token
		}
	}).then(res).catch(err);
}

/**
 * 获取指定项目详情
 * @param {String} pid 项目的id
 * @param {String} token 用户的token
 * @param {Object} resLL
 * @param {Object} err
 */
export function getProjectAPI(pid, token, res, err) {
	request.get('/private/json/' + pid, {
		headers: {
			'x-session': token
		}
	}).then(res).catch(err);
}

/**
 * 获取分享项目
 * @param {String} pid 分享的id
 * @param {String} pwd 查看的密码
 * @param {Object} resLL
 * @param {Object} err
 */
export function getProjectShareAPI(sid, pwd, res, err) {
	request.get('/project/share', {
		params: {
			sid: sid,
			pwd: pwd
		}
	}).then(res).catch(err);
}
